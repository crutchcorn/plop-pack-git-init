const { spawn } = require('child_process');

const didSucceed = (code) => `${code}` === '0';

function gitInit(_, config) {
	const spawnOptions = config.verbose ? {
		cwd: config.path,
		shell: true,
		stdio: 'inherit',
	} : {
		cwd: config.path
	};

	const gitInitLocal = () =>
		new Promise((resolve, reject) => {
			const gitInit = spawn('git', ['init'], spawnOptions);

			gitInit.on('close', (code) => {
				if (didSucceed(code)) {
					resolve(`git init ran correctly`);
				} else {
					reject(`git init exited with ${code}`);
				}
			});
		});

	const gitAdd = () =>
		new Promise((resolve, reject) => {
			const gitAdd = spawn('git', ['add', '-A'], spawnOptions);

			gitAdd.on('close', (code) => {
				if (didSucceed(code)) {
					resolve(`git add ran correctly`);
				} else {
					reject(`git add exited with ${code}`);
				}
			});
		});

	const gitCommit = () =>
		new Promise((resolve, reject) => {
			const gitAdd = spawn('git', ['commit', '-m "Initial commit"'], spawnOptions);

			gitAdd.on('close', (code) => {
				if (didSucceed(code)) {
					resolve(`git commit ran correctly`);
				} else {
					reject(`git add exited with ${code}`);
				}
			});
		});

	return gitInitLocal()
		.then(() => gitAdd())
		.then(() => gitCommit());
}

module.exports = function (plop) {
  plop.setActionType('gitInit', gitInit);
}