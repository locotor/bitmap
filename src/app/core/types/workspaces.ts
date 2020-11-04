export interface Workspace {
    name: string;
    href: string;
}

export interface AddWorkspaceFormData {
    name: string;
    namespace: string;
}

export interface AddWorkspaceParam {
    workspace: {
        name: string;
        connectionParameters: {
            entry: [
                { '@key': string, '$': string }
            ]
        };
    };
}
