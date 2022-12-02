const convertZeroes = (no) => {
	let res = String(no);
    let ans = res.replace(/['0']/g, '5');
	return ans;
}
console.log(convertZeroes(1004));
