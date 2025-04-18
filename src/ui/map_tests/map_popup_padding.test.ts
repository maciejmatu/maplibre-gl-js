import {beforeEach, test, expect} from 'vitest';
import {createMap, beforeMapTest} from '../../util/test/util';

beforeEach(() => {
    beforeMapTest();
    global.fetch = null;
});

test('Map#setPopupPadding sets padding and getPopupPadding returns it', () => {
    const map = createMap();
    const padding = {top: 10, bottom: 20, left: 30, right: 40};
    
    map.setPopupPadding(padding);
    
    const result = map.getPopupPadding();
    expect(result).toEqual(padding);
});

test('Map constructor accepts popupPadding option', () => {
    const padding = {top: 10, bottom: 20, left: 30, right: 40};
    const map = createMap({popupPadding: padding});
    
    const result = map.getPopupPadding();
    expect(result).toEqual(padding);
});

test('Map#getPopupPadding returns null when not set', () => {
    const map = createMap();
    
    const result = map.getPopupPadding();
    expect(result).toBeNull();
}); 
