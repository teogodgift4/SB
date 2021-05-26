import {render, fireEvent, queryByTitle} from "@testing-library/react";
import Map from './Map';

it('checkMapRender',()=>{
const map = render(<Map/>);
expect(map).toBeTruthy();
});