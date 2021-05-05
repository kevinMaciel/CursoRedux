import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addBug } from '../bugs';
import configureStore from '../configureStore';

describe("bugSlice", () => {
    let fakeAxios;
    let store;

    beforeEach(() => {
        fakeAxios = new MockAdapter(axios);
        store = configureStore();
    });

    const bugsSlice = () => store.getState().entities.bugs;

    it("should add the bug to the store if its saved to the server", async () => {
        const bug = { description: 'a' };
        const saveBug = { ...bug, id: 1};
        fakeAxios.onPost('/bugs').reply(200, savedBug);

        await store.dispatch(addBug());

        expect(bugsSlice().list).toContainEqual(saveBug);
    });

});