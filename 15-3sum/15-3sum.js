var threeSum = function(nums) {
    const set = new Set()
    
    for(let i=0; i<nums.length-2; i++){
        const map = new Map()
        for(let j=i+1; j<nums.length; j++){
            if(map.has(nums[j])){
                const [a,b] = map.get(nums[j])
                const arr = [nums[a], nums[b], nums[j]]
                arr.sort((a,b) => (a-b))
                set.add(arr.join(','))
            }else{
                map.set(-nums[i] - nums[j], [i,j])
            }
        }    
    }
    return Array.from(set).map(str => str.split(',').map(Number))
};

// hello world