import BlockCard from '@DashboardApp/pages/blocks/BlockCard';
import { useSelector } from 'react-redux';

const BlockCardsGroup = () => {

    const activeBlocksFilterTab = useSelector( ( state ) => state.activeBlocksFilterTab );

    const blocksInfo = uag_react.blocks_info;
    
    const renderBlockCards = blocksInfo.map( ( block, index ) => {

        const blockCategories = block.admin_categories;
        const showBlockCard = blockCategories.includes( activeBlocksFilterTab ) || 'all' === activeBlocksFilterTab;

        if ( ! showBlockCard ) {
            return '';
        }

		return <BlockCard key={ index } blockInfo={ block } />}
	);
    
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 p-6">
            { renderBlockCards }
        </div>
    );
};

export default BlockCardsGroup;