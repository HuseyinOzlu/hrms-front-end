import React from 'react'
import '../style/style.scss';

this.state = {
    openSearch: false
    }

    openSearch = () => {
        this.setState({ openSearch: false });
    }
export default function Search() {
    return (
        <div>

{
    this.state.openSearch ? (<div className={styles.searchBox}>
    <input type="text" placeholder="Search Inventory" onChange={(e) => this.searchMyInventory(e.target.value)} />
    <img alt="" src={require('../close1.png')} className={styles.closeSearch} onClick={() => this.openSearch()} />
    </div>) : (<div className={styles.search} onClick={() => this.setState({ openSearch: true })}>
    <img alt="" src={require('../searchDark.png')} />
    </div>)}

        </div>
    )
}
