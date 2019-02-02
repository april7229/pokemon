import { connect } from 'rect-redux'; 
import * as pageActions from '../redux/actions/page';
import Page from '../components/page';

function mapStateToProps( state )
{
    const { displayedPokemons, isFetched, error } = state.page;

    return {
        displayedPokemons,
        isFetched,
        error
  
  
    }
}
const mapDispatchToProps = {
    getPokemons: pageActions.getPokemons,
    filterPokemon: pageActions.filterPokemons
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Page)
