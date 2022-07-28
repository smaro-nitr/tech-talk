import {memo} from 'react'
import {customLog} from 'utility/logger'

const ExternalChildrenWithMemo = () => {
	customLog('#1 - External Children with Memo Loaded')

	return <h4>#1 - External Children with Memo</h4>
}

export default memo(ExternalChildrenWithMemo)
