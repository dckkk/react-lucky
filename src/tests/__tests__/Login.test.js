import { loginUser, logoutUser } from "../../actions/login"

const mockCallback = jest.fn();

it('test loginUser', () => {
    let data = {
        username: "Renata",
        password: 1234,
        role: "Admin"
    }

    expect(loginUser(data, mockCallback)).toEqual(200)
})

it('test logoutUser', () => {
    expect(logoutUser(mockCallback)).toEqual(200)
})

