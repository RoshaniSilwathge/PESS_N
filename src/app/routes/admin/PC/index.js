import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PCItem from '../../../components/admin/pcs/PCItem';
import {searchKeyChanged} from '../../../../actions/admin/PC';

class PCPage extends React.Component {

  handleSearchKey(e){
    this.props.actions.searchKeyChanged(e.target.value);
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-md-9">
            <Link to="/app/admin/pc/new">
              <Button size="small" variant="contained" className="jr-btn bg-blue text-white project-btn">New Project Coordinator</Button>
            </Link>
          </div>
          <div className="col-md-3">
            <TextField
              id="pc-search"
              label="Search Project Coordinator"
              value={this.props.searchKey}
              onChange={(e) => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <div className="row project-wrapper">
        {
          this.props.pcs.map(pc => <PCItem key={`pc-${pc.id}`} pc={pc}/>)
        }
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {searchKey, pcs} = state.pcs;
  return {searchKey, pcs: pcs.filter(pc=>pc.name.includes(searchKey))}
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        searchKeyChanged
      }, dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PCPage);