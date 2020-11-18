import Playlist from '../src/services/playlist/playlist';

test('Tracks must return items', async () => {
    const city: string = 'campinas';

    const playlist = new Playlist(city);
    const tracks = await playlist.getTracks();

    expect(tracks).toBeDefined();
    expect(tracks).toHaveProperty('items');
});
