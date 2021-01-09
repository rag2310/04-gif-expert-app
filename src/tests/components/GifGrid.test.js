import {shallow} from "enzyme";
import '@testing-library/jest-dom';
import {GifGrid} from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas de <GifGrid />', function () {

    const category = 'One Punch';

    test('debe mostrar <GifGrid />', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetch()', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost:8080.jpg',
            title: 'Cualquir cosa'
        }, {
            id: '123',
            url: 'https://localhost:8080.jpg',
            title: 'Cualquir cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});