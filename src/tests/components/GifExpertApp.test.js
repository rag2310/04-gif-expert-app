import {shallow} from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp from "../../GifExpertApp";

describe('Pruebas de <GifExpertApp />', function () {

    test('debe mostrar <GifExpertApp />', () => {

        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {

        const categories = ['One puch', 'Dragon ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});