export type AppConfig = {
    nodeEnv: string;
    name: string;
    workingDirectory: string;
    apiPrefix: string;
    port: number;
}

export type DatabaseConfig = {
    type : string;
    name: string;
    host: string;
    username: string;
    password: string;
    port: number;
    schema: string;
    synchronize: boolean;
    sslEnabled: boolean;
    poolSize: number;
    rejectUnauthorize: boolean;
}

export type AllConfigTypes={
    database: DatabaseConfig;
    app: AppConfig;
}