import React from 'react'
import renderer from 'react-test-renderer'

import ValidateAccount from "../index"

describe('ValidateAccount', () => {
    test('renders ValidateAccount', () => {
        const component = renderer.create(
            <ValidateAccount />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})