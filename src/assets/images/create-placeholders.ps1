# Script para criar imagens placeholder
Add-Type -AssemblyName System.Drawing

# Função para criar imagem placeholder
function Create-PlaceholderImage {
    param(
        [string]$FileName,
        [string]$Text,
        [int]$Width = 400,
        [int]$Height = 300
    )
    
    $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # Fundo cinza claro
    $graphics.FillRectangle([System.Drawing.Brushes]::LightGray, 0, 0, $Width, $Height)
    
    # Borda
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::DarkGray, 2)
    $graphics.DrawRectangle($pen, 1, 1, $Width - 2, $Height - 2)
    
    # Texto
    $font = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::DarkGray)
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $graphics.DrawString($Text, $font, $brush, $Width/2, $Height/2, $stringFormat)
    
    # Salvar
    $bitmap.Save($FileName, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $graphics.Dispose()
    $bitmap.Dispose()
    $pen.Dispose()
    $font.Dispose()
    $brush.Dispose()
}

# Criar imagens placeholder
Write-Host "Criando imagens placeholder..."

# Logo principal
Create-PlaceholderImage "logo-arte-construir.png" "Arte Construir" 200 80

# Backgrounds
Create-PlaceholderImage "hero-bg.jpg" "Hero Background" 1920 1080
Create-PlaceholderImage "projects-hero-bg.jpg" "Projects Background" 1920 1080
Create-PlaceholderImage "decks-hero-bg.jpg" "Decks Background" 1920 1080
Create-PlaceholderImage "parceiros-hero-bg.jpg" "Parceiros Background" 1920 1080

# Logos parceiros
Create-PlaceholderImage "logo-tw-brazil.jpg" "TW Brazil" 200 80
Create-PlaceholderImage "logo-inbrasil.jpg" "Inbrasil" 200 80

# Chalés
Create-PlaceholderImage "chale-aimee.jpg" "Chalé Aimee" 400 300
Create-PlaceholderImage "chale-suico.jpg" "Chalé Suíço" 400 300
Create-PlaceholderImage "chale-montanha.jpg" "Chalé da Montanha" 400 300
Create-PlaceholderImage "chale-aurora.jpg" "Chalé Aurora" 400 300

# Lofts
Create-PlaceholderImage "loft-30m.jpg" "Loft 30m²" 400 300
Create-PlaceholderImage "loft-40m.jpg" "Loft 40m²" 400 300
Create-PlaceholderImage "loft-60m.jpg" "Loft 60m²" 400 300

# Tipos de madeira
Create-PlaceholderImage "madeira-natural.jpg" "Madeira Natural" 400 300
Create-PlaceholderImage "madeira-plastica.jpg" "Madeira Plástica" 400 300

# Galeria de decks
Create-PlaceholderImage "deck-natural-1.jpg" "Deck Natural 1" 400 300
Create-PlaceholderImage "deck-natural-2.jpg" "Deck Natural 2" 400 300
Create-PlaceholderImage "deck-natural-3.jpg" "Deck Natural 3" 400 300
Create-PlaceholderImage "deck-plastica-1.jpg" "Deck Plástica 1" 400 300
Create-PlaceholderImage "deck-plastica-2.jpg" "Deck Plástica 2" 400 300
Create-PlaceholderImage "deck-plastica-3.jpg" "Deck Plástica 3" 400 300
Create-PlaceholderImage "deck-before-after-1.jpg" "Antes/Depois 1" 400 300
Create-PlaceholderImage "deck-before-after-2.jpg" "Antes/Depois 2" 400 300
Create-PlaceholderImage "deck-before-after-3.jpg" "Antes/Depois 3" 400 300

# Fotos adicionais dos chalés
Create-PlaceholderImage "chale-aimee-2.jpg" "Chalé Aimee 2" 400 300
Create-PlaceholderImage "chale-aimee-3.jpg" "Chalé Aimee 3" 400 300
Create-PlaceholderImage "chale-suico-2.jpg" "Chalé Suíço 2" 400 300
Create-PlaceholderImage "chale-suico-3.jpg" "Chalé Suíço 3" 400 300
Create-PlaceholderImage "chale-montanha-2.jpg" "Chalé Montanha 2" 400 300
Create-PlaceholderImage "chale-montanha-3.jpg" "Chalé Montanha 3" 400 300
Create-PlaceholderImage "chale-aurora-2.jpg" "Chalé Aurora 2" 400 300
Create-PlaceholderImage "chale-aurora-3.jpg" "Chalé Aurora 3" 400 300

# Fotos adicionais dos lofts
Create-PlaceholderImage "loft-30m-2.jpg" "Loft 30m² 2" 400 300
Create-PlaceholderImage "loft-30m-3.jpg" "Loft 30m² 3" 400 300
Create-PlaceholderImage "loft-40m-2.jpg" "Loft 40m² 2" 400 300
Create-PlaceholderImage "loft-40m-3.jpg" "Loft 40m² 3" 400 300
Create-PlaceholderImage "loft-60m-2.jpg" "Loft 60m² 2" 400 300
Create-PlaceholderImage "loft-60m-3.jpg" "Loft 60m² 3" 400 300

Write-Host "Imagens placeholder criadas com sucesso!"
