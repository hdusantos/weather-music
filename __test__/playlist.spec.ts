import PlaylistController from '../src/services/playlist/playlist';

test('Tracks must return items', async () => {
    const city: string = 'campinas';

    const playlistCtrl = new PlaylistController(city);
    const playlist = await playlistCtrl.getTracks();

    expect(playlist).toBeDefined();
    expect(playlist).toHaveProperty('items');
});
