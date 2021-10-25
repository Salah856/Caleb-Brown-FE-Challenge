
it('renders correctly enzyme', () => {
    const wrapper = shallow(<App />);  
    expect(toJson(wrapper)).toMatchSnapshot();
});