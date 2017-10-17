import * as React from 'react';
import NavMenu from './NavMenu';
import { AJAX_TEST_ACTION } from '../actions/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// export interface LayoutProps {
//     body: React.ReactElement<any>;
// }

 class Layout extends React.Component<any, any> {

    public AJAXTest(){
        AJAX_TEST_ACTION();
    }

    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
                    <div>
                        <a onClick={ ()=> this.AJAXTest()} >  ajax asiox test</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ AJAX_TEST_ACTION }, dispatch);
  }

export default connect(
    null,
    mapDispatchToProps
  )(Layout)

