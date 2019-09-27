Vagrant.configure("2") do |config|
 
    config.vm.box = "ubuntu/bionic64"
    config.vm.network "forwarded_port", guest: 3000, host: 53000
    config.vm.network "forwarded_port", guest: 5000, host: 55000
  
    config.vm.provider "virtualbox" do |vb|
        vb.name = "atlas_dev"
        vb.cpus = 2
        vb.memory = "4096"
    end
  
   config.vm.provision "shell",
       inline: <<-SCRIPT
            set -e
            apt-get update
            apt-get upgrade -y
            curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
            sudo apt-get install -y nodejs
            curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
            echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
            apt-get update
            apt-get -y install yarn
            apt-get autoremove -y
        SCRIPT
    
  end
