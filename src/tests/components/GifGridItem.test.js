import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas del componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem
        title={title}
        url={url}
    />);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la img igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        const { src, alt } = img.props();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de tener animate__bounce', () => {
        const div = wrapper.find('div');
        const { className } = div.props();
        const [, , animateBound] = className.split(' ');
        expect(animateBound).toContain('animate__bounce');
    })

})
