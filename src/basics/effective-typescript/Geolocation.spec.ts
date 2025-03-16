import { GeoLocation, Location } from "./Geolocation";

describe('GeoLocation Constructor', () => {
    it('should create a new GeoLocation instance', () => {
        const location: Location = { lat: 37.7749, long: -122.4194 };
        const geoLocation = new GeoLocation(location);

        expect(geoLocation).toBeInstanceOf(GeoLocation);
        expect(geoLocation).toEqual({ location });
    });
    it('should throw error if input is incorrect', () => {
        expect(() => new GeoLocation(null)).toThrow('Invalid location');
    });
    
    it('should throw error if latitude is missing', () => {
        expect(() => new GeoLocation({ lat: null, long: 100 })).toThrow('Invalid location');
    });
    
    it('should throw error if longitude is missing', () => {
        expect(() => new GeoLocation({ lat: 100, long: null })).toThrow('Invalid location');
    });
});

describe('GeoLocation methods', () => {
    it('should calculate the distance between two locations', () => {
        const location1: Location = { lat: 37.7749, long: -122.4194 };
        const location2: Location = { lat: 34.0522, long: -118.2437 };

        const geoLocation = new GeoLocation(location1);
        const distance = geoLocation.distanceFrom(location2);
        expect(distance).toBeCloseTo(559, 0.6);
    });

    it('should throw error if input is incorrect', () => {
        const location1: Location = { lat: 37.7749, long: -122.4194 };
        const geoLocation = new GeoLocation(location1);

        expect(() => geoLocation.distanceFrom(null)).toThrow('Invalid location');
    });
});