const parseEnv = () => {
    const prefix = 'RSS_';
    const envVariables = process.env;

    Object.entries(envVariables).forEach(([key, value]) => {
        if (key.startsWith(prefix)) {
        const variableName = key.replace(prefix, '');
        console.log(`RSS_${variableName}=${value}`);
        }
    });
};

parseEnv();

// npm run cli:env