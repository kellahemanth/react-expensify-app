import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is: {props.info}</p>
    </div>
);

const withAdminComponent = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is confidential</p>}
            <WrappedComponent { ...props }/>
        </div>
    );
};

const Hoc = withAdminComponent(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth 
                ? <WrappedComponent { ...props } />
                : <p>Please login to see info.</p>
            }
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuth={false} info='Here are the details'/>, document.getElementById('app'));