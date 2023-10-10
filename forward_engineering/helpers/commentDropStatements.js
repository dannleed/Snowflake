/*
 * Copyright © 2016-2023 by IntegrIT S.A. dba Hackolade.  All rights reserved.
 *
 * The copyright to the computer software herein is the property of IntegrIT S.A.
 * The software may be used and/or copied only with the written permission of
 * IntegrIT S.A. or in accordance with the terms and conditions stipulated in
 * the agreement/contract under which the software has been supplied.
 */

const { DROP_STATEMENTS } = require('./constants');
const commentDropStatements = (script = '') =>
	script
		.split('\n')
		.map(line => {
			if (DROP_STATEMENTS.some(statement => line.includes(statement))) {
				return `-- ${line}`;
			} else {
				return line;
			}
		})
		.join('\n');

module.exports = {
	commentDropStatements,
};
