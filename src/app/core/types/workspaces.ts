export interface Workspace {
    name: string;
    href: string;
}

export interface WorkspaceFormDialogData {
    mode: 'edit' | 'create';
    formData: {
        name: string;
        namespace: string;
    }
}

export interface AddWorkspaceParam {
    workspace: {
        name: string;
        connectionParameters?: {
            entry: [
                { '@key': string, '$': string }
            ]
        };
    };
}
