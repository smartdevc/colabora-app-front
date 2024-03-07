export const environment = {

    backendUrl: 'http://localhost:8088',
    cause: {
        getAllCauses: '/api/causes',
        getCauseById: '/api/causes/',
        createCause: '/api/causes',
        updateCause: '/api/causes/',
        deleteCause: '/api/causes/'
    },
    project : {
        getAllProject: '/api/projects',
        getProjectById: '/api/projects/',
        createProject: '/api/projects',
        updateProject: '/api/projects/',
        deleteProject: '/api/projects/'

    },
    organization: {
        getAllOrganization: '/api/organizations',
        getOrganizationById: '/api/organizations/',
        createOrganization: '/api/organizations',
        updateOrganization: '/api/organizations/',
        deleteOrganization: '/api/organizations/',
    },
    profile: {
        getAllProfile: '/api/profiles',
        getProfileById: '/api/profiles/',
        createProfile: '/api/profiles',
        updateProfile: '/api/profiles/',
        deleteProfile: '/api/profiles/'
    },
    user: {
        getAllUser: '/api/users',
        getUserById: '/api/users/',
        createUser: '/api/users',
        updateUser: '/api/users/',
        deleteUser: '/api/users/'
    }

};
