import userReducer, {
    UsersState,
    addUser, removeUser, updateUser
} from "./entityAdapterSlice"



describe("page data reducer", () => {
    const initialState: UsersState = {
        status: 'idle',
        error: null,
        ids: [],
        entities: {}
    }

    it("should handle initial state", () => {
        expect(userReducer(undefined, { type: "unknown" })).toEqual({
            status: 'idle',
            error: null,
            ids: [],
            entities: {}
        })
    })

    it("should handle add User", () => {
        const newUser = {
            id: 1,
            name: 'New User',
        };
        const actual = userReducer(initialState, addUser(newUser))
        expect(actual.ids).toHaveLength(1)
        expect(actual.entities[1]).toEqual(newUser)
    })

    // it("should handle setItemsPerPage", () => {
    //     const actual = pageDataReducer(initialState, setItemsPerPage(50))
    //     expect(actual.itemsPerPage).toEqual(50)
    // })

    // it("should handle setFilterValue", () => {
    //     const actual = pageDataReducer(initialState, setFilterValue('abcd'))
    //     expect(actual.filterValue).toEqual('abcd')
    // })

    // it("should handle setPageDataValue", () => {
    //     const actual = pageDataReducer(initialState, setPageDataValue({ page: 10, itemsPerPage: 30, filterValue: 'william' }))
    //     expect(actual).toEqual({
    //         page: 10,
    //         itemsPerPage: 30,
    //         filterValue: 'william',
    //     })

    // })
})
