<?php

return [
    [
        'name' => 'view sites',
        'title' => 'View Any Site',
        'description' => 'Allow users to view any site, plot, plant and measurement including those belonging to other users.',
        'default' => ['Scientist'],
    ],
    [
        'name' => 'update sites',
        'title' => 'Update Any Site',
        'description' => 'Allow users to edit the information of any site, plot, plant, or measurement including those belonging to other users.',
        'default' => [],
    ],
    [
        'name' => 'delete sites',
        'title' => 'Delete Any Site',
        'description' => 'Allow users to permanently delete any site, plot, plant, or measurement including those belonging to other users.',
        'default' => [],
    ],
    [
        'name' => 'view groups',
        'title' => 'View Any User Group',
        'description' => 'Allow users to view any group including groups created by other users.',
        'default' => [],
    ],
    [
        'name' => 'update groups',
        'title' => 'Update Any User Group',
        'description' => 'Allow users to edit the information of any group including groups created by other users.',
        'default' => [],
    ],
    [
        'name' => 'delete groups',
        'title' => 'Delete Any User Group',
        'description' => 'Allow users to delete any group including groups created by other users.',
        'default' => [],
    ],
    [
        'name' => 'view users',
        'title' => 'View Any User',
        'description' => 'Allow users to view other users information including names and email addresses.',
        'default' => [],
    ],
    [
        'name' => 'update users',
        'title' => 'Update Any User',
        'description' => 'Allow users to edit the information of other users including names and email addresses.',
        'default' => [],
    ],
    [
        'name' => 'delete users',
        'title' => 'Delete Any User',
        'description' => 'Allow users to permanently delete other users. Note that deleting users will result in losing their collected data.',
        'default' => [],
    ],
    [
        'name' => 'manage species',
        'title' => 'Manage Species List',
        'description' => 'Allow users to manage the species list. Users will be allowed to add, update and delete species.',
        'default' => [],
    ],
    [
        'name' => 'manage permissions',
        'title' => 'Manage Roles & Permissions',
        'description' => 'Allow users to manage roles and permissions. This would give users access to the current page.',
        'default' => [],
    ],
    [
        'name' => 'manage events',
        'title' => 'Manage Events',
        'description' => 'Allow users to manage events. Users will be allowed to add, update, and delete events.',
        'default' => [],
    ],
    [
        'name' => 'share sites',
        'title' => 'Share Any Site',
        'description' => 'Allow users to send invites to share any site, including those belonging to other users.',
        'default' => [],
    ],
];
