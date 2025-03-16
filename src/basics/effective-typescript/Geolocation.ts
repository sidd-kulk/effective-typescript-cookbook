
export interface Location {
    lat: number
    long: number
}

export class GeoLocation {
    private readonly location: Location;

    constructor(location: Location) {
        if (!location?.lat || !location?.long) {
            throw new Error('Invalid location');
        }
        this.location = location
    }

    distanceFrom(location2: Location): number {
        if (!location2?.lat || !location2?.long) {
            throw new Error('Invalid location');
        }
        const location1 = this.location;
        const earthRadiusKm = 6371; // Earth's radius in kilometers

        const lat1Rad = toRadians(location1.lat);
        const lon1Rad = toRadians(location1.long);
        const lat2Rad = toRadians(location2.lat);
        const lon2Rad = toRadians(location2.long);

        // Haversine formula
        const dLat = lat2Rad - lat1Rad;
        const dLon = lon2Rad - lon1Rad;

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadiusKm * c;

        return distance;
    }
}

function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}
