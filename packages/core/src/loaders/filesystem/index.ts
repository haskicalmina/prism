import { IFilesystemLoaderOpts } from '../../types';

export const filesystemLoader = {
  load: async <Resource>(opts?: IFilesystemLoaderOpts): Promise<Resource[]> => {
    // TODO: will use graph
    return [];
  },
};
