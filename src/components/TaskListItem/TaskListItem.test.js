import React from 'react'
import ReactDOM from 'react-dom'
import TaskListItem from './TaskListItem'
import { shallow, mount } from 'enzyme'

const handleClickDelete = jest.fn();
const changeImage = jest.fn();
const changeImageClass = jest.fn();

describe.only('TaskListItem', () => {
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
        ReactDOM.render(<TaskListItem task={testTask} />, div);

        ReactDOM.unmountComponentAtNode(div)
    })

    it('should render title inside of h3', () => {
        let props = {
            title: 'test title',
            image: 'https//testimage.com',
            checked: false,
            user_id: 1
        };

        const wrapper = shallow(<TaskListItem task={props} />);
        const title = wrapper.find('h3');
        expect(title).toHaveLength(1);
        expect(title.text()).toEqual('test title');

    })

    it('test delete button', () => {
        let props = {
            title: 'test title',
            image: 'https//testimage.com',
            checked: false,
            user_id: 1
        };

        //reset info from previous calls - particularly toggles!
        // handleClickDelete.mockClear()

        const wrapper = mount(
            <TaskListItem
                task={props}
                onClick={handleClickDelete}
            />);

        wrapper.find("div").simulate("click");

        expect(handleClickDelete).toHaveBeenCalled();

    });

    it('show checkmark image when checked is true', () => {
        let props = {
            title: 'test title',
            image: 'https//testimage.com',
            checked: true,
            user_id: 1
        };

        const wrapper = shallow(
            <TaskListItem
                task={props}
            />)

        expect(wrapper).toMatchSnapshot();
    });

    it('show task image when checked is false ', () => {
        let props = {
            title: 'test title',
            image: 'https//testimage.com',
            checked: false,
            user_id: 1
        };

        const wrapper = shallow(
            <TaskListItem
                task={props}
            />)

        expect(wrapper).toMatchSnapshot();

    })
})