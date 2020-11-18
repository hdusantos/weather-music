import Playlist from '../src/services/playlist/playlist';
import { Location } from '../src/types/types';

test('Using city name: The return should contain items', async () => {
    const city: string = 'campinas';
    const location: Location = { city };

    const playlist = new Playlist(location);
    const tracks = await playlist.getTracks();

    expect(tracks).toBeDefined();
    expect(tracks).toHaveProperty('items');
});

test('Using lat and lon: The return should contain items', async () => {
    const location: Location = {
        lat: '55.751244',
        lon: '37.618423',
    };

    const playlist = new Playlist(location);
    const tracks = await playlist.getTracks();

    expect(tracks).toBeDefined();
    expect(tracks).toHaveProperty('items');
});

test('Using invalid city name: Should throw an exception', async () => {
    const city: string = 'aaaaaa';
    const location: Location = { city };

    const playlist = new Playlist(location);

    await expect(playlist.getTracks()).rejects.toThrowError();
});

test('Using invalid lat and lon: Should throw an exception', async () => {
    const location: Location = {
        lat: '1111111111111111',
        lon: '2222222222222222',
    };

    const playlist = new Playlist(location);

    await expect(playlist.getTracks()).rejects.toThrowError();
});
