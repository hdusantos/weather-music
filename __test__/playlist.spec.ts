import Playlist from '../src/services/playlist/playlist';
import { Location } from '../src/types/types';

test('Tracks must return items', async () => {
    const city: string = 'campinas';
    const location: Location = { city };

    const playlist = new Playlist(location);
    const tracks = await playlist.getTracks();

    expect(tracks).toBeDefined();
    expect(tracks).toHaveProperty('items');
});
