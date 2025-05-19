#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

echo "Starting build process..."

# Install Rust and Cargo
echo "Installing Rust and Cargo..."
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Source the Rust environment file to set up the proper environment variables
echo "Setting up Rust environment..."
source "$HOME/.cargo/env"

# Set default toolchain
echo "Setting default Rust toolchain..."
~/.cargo/bin/rustup default stable

# Verify installation
echo "Verifying Rust installation..."
~/.cargo/bin/rustc --version
~/.cargo/bin/cargo --version

# Make sure cargo is in the PATH
export PATH="$HOME/.cargo/bin:$PATH"

# Install Python dependencies
echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo "Build process completed successfully!"