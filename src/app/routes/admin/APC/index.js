import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import APCItem from '../../../components/admin/apcs/APCItem';
import {searchKeyChanged} from '../../../../actions/admin/APC';

class APCPage extends React.Component {

  handleSearchKey(e){
    this.props.actions.searchKeyChanged(e.target.value);
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-md-8">
            <Link to="/app/admin/apc/new">
              <Button size="small" variant="contained" className="jr-btn bg-blue text-white project-btn">New Asso : Project Coordinator</Button>
            </Link>
          </div>
          <div className="col-md-4">
            <TextField
              id="apc-search"
              label="Search Asso: Project Coordinator"
              value={this.props.searchKey}
              onChange={(e) => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <div className="row project-wrapper">
        {
          this.props.apcs.map(apc => <APCItem key={`apc-${apc.id}`} apc={apc}/>)
        }
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {searchKey, apcs} = state.apcs;
  return {searchKey, apcs: apcs.filter(apc=>apc.name.includes(searchKey))}
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        searchKeyChanged
      }, dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(APCPage);