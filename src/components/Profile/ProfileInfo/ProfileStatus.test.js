import React from "react";
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => { 
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status="hello marina"/>);
        const instance = component.getInstance();

        expect(instance.state.status).toEqual("hello marina");
    });
    test('After creation span should be displayed', () => {
        const component = create(<ProfileStatus status="hello marina"/>);
        const root = component.root;
        const span = root.findByType("span");

        expect(span).not.toBeNull();
    });
    
    test('After creation <span> should be displayed  with correct status', () => {
        const component = create(<ProfileStatus status="hello marina"/>);
        const root = component.root;
        const span = root.findByType("span");

        expect(span.children[0]).toBe("hello marina");
    });

    test('After loading profile page <input> should not be displayed', () => {
        const component = create(<ProfileStatus status="hello marina"/>);
        const root = component.root;

        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test('After double click on <span> <input>should be displayed', () => {
        const component = create(<ProfileStatus status="hello marina"/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");

        expect(input.props.value).toBe("hello marina");
    });

    test('Callback should be calls', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="hello marina" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });
    
    test('Callback should be calls with right status', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="hello marina" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls[0][0]).toBe("hello marina");
    });
})