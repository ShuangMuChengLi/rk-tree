export const treeUtil = {
    getAllLeaf (data) {
        let result = []
        function getLeaf (data) {
            data.forEach(item => {
                if (!item.children) {
                    result.push(item.path)
                } else {
                    getLeaf(item.children)
                }
            })
        }
        getLeaf(data)
        return result
    }
}
