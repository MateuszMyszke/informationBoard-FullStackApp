import Button from '../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return(
    <form className={styles.search}>
      <SearchInput placeholder='enter a phrasesearch' />
      <Button>Search</Button>
    </form>
  )
};

export default SearchForm;