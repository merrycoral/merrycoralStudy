import React from 'react';

const IterationSample = () => {
	const names = ['홍차', '녹차', '보이차', '우롱차'];
	const nameList = names.map(name => <li>{name}</li>);
	return <ul>{nameList}</ul>;

};

export default IterationSample;