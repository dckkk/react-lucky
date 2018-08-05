import { getData, like, countLike } from "../../actions/entities"

const mockCallback = jest.fn();

it('test getData', () => {
    expect(getData("", 1, mockCallback).length).toBe(4)
})

it('test like', () => {
    expect(like(1, "goride_booking", "like", mockCallback)).toEqual(true)
    expect(like(1, "goride_booking", "unlike", mockCallback)).toEqual(true)
})

it('test countLike', () => {
    expect(countLike(mockCallback).length).toBe(4)
})
