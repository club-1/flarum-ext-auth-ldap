<?php

/*
 * This file is part of fof/default-group.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TitusPiJean\Flarum\Auth\LDAP\Listeners;

use Flarum\Extend\Settings;
use Flarum\Group\Group;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Registered;
use TitusPiJean\Flarum\Auth\LDAP\Consts;

class AddDefaultGroup
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Registered $event)
    {
        $groupId = $this->settings->get(Consts::SETTINGS_PREFIX . 'group');
        $isLDAP = $event->user->loginProviders()->where('provider', '=', 'ldap')->count() === 1;
        if ($isLDAP && $groupId !== Group::MEMBER_ID) {
            $event->user->groups()->attach($groupId);
        }
    }
}
