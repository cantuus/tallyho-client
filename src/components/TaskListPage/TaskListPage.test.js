import React from 'react'
import ReactDOM from 'react-dom'
import TaskListPage from './TaskListPage'
import { shallow, mount } from 'enzyme'

// const mockResponse = [
//     {
//         id: 1,
//         title: 'test title',
//         image: 'https//testimage.com',
//         checked: false,
//         user_id: 1
//     }
// ]

// jest.mock('../../services/tallyho-api-service', () => {
//     get: jest.fn(() => Promise.resolve(mockResponse))
// });
describe.skip('TaskList Component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        const testTask = [
            {
                title: 'test title',
                image: 'https//testimage.com',
                checked: false,
                user_id: 1
            }
        ]
        ReactDOM.render(<TaskListPage task={testTask} />, div);

        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders Editmode', () => {
        const props = {
            renderTask: () => { },
            tasks: [],
            handleDeleteTask: () => { },
            handleClickToggle: () => { },
            editModeOn: false,
            addTaskSuccess: () => { },
            saveTaskSuccess: () => { }
        }

        const wrapper = shallow(<TaskListPage
            {...props} />);

        wrapper.setProps({ editModeOn: true });

        expect(wrapper.props.editModeOn).toBeTruthy();

    });

    // it('fetches the tasks', done => {
    //     const wrapper = shallow(<TaskListPage />);

    //     setTimeout(() => {
    //         expect(wrapper.find('TaskItem').length.toEqual(1));
    //     });
    // });

});