import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';
import { selectCollections ,selectCreateSelector} from '../../redux/shop/shop.selector';


const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...othercollectionprops }) => (
                    <CollectionPreview key={id} {...othercollectionprops}></CollectionPreview>
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCreateSelector
});

export default connect(mapStateToProps)(CollectionsOverview);