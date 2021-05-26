import {screen, within, render, fireEvent, queryByTitle, findAllByTestId} from "@testing-library/react";
import { MapContainer, Marker } from "react-leaflet";
import Map from './Map';
import { mount } from 'enzyme';

it('checkMarkerRender',()=>{
const mapComp = mount(<MapContainer/>);
const mark = mapComp.find(<Marker position={[37.9744464, 23.7478837]}/>);
expect(mark).toBeTruthy();
});

it('checkMarkerOnClick',()=>{
    const mapComp = mount(<MapContainer/>);
const mark = mapComp.find(<Marker position={[37.9744464, 23.7478837]}/>);
mark.simulate('click');
    });
