import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ route }) => {
    return (
        <Helmet>
            <title>{route} - Volunteer Group</title>
        </Helmet>
    );
};

export default PageTitle;