#cloud-config
package_upgrade: true
packages:
  - docker.io
  - docker-compose
runcmd:
  - [ sh, -c, "usermod -aG docker {{admin_user}} || true" ]
  - [ sh, -c, "mkdir -p /home/{{admin_user}}/deploy || true" ]
  - [ sh, -c, "chown -R {{admin_user}}:{{admin_user}} /home/{{admin_user}}/deploy" ]
  - [ sh, -c, "systemctl enable --now docker || true" ]
  - [ sh, -c, "curl -L \"https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose || true" ]
  - [ sh, -c, "chmod +x /usr/local/bin/docker-compose || true" ]
