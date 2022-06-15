import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import InstructorMain from './instructor/InstructorMain';
function Panel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                < Box p={3} style={{ alignContent: 'center', margin: 'auto' }}>
                    {children}
                </Box>

            )}
        </div>
    );
}

const Home = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div style={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                showlabels="true"
            >
                <Tab label="Instructors" />
                <Tab label="Courses" />
                <Tab label="Rules" />
                <Tab label="Schedule" />
                
            </Tabs>
            <Panel value={value} index={0}>
            <InstructorMain />
            </Panel>
        </div>
    )
};

export default Home;