--[[
    ╔══════════════════════════════════════════════╗
    ║         DoglyTdc Roblox UI Loader            ║
    ║      Biblioteca UI com tema roxo DoglyTdc    ║
    ║         https://doglytdc.site                ║
    ╚══════════════════════════════════════════════╝
    
    Arquivos inclusos:
    • Library.lua      - Framework UI principal (V1)
    • LibraryV3.lua    - Framework UI V3 (versão avançada)
    • SaveManager.lua  - Gerenciador de saves
    • SaveManagerV3.lua - Gerenciador de saves V3
    • esp.lua          - ESP (wallhack visual)
    • chiyo.lua        - Módulo auxiliar
    
    Cores DoglyTdc:
    • Accent:     RGB(109, 40, 217) - Roxo DoglyTdc (#6d28d9)
    • Background: RGB(8, 8, 12)     - Dark base
    • Main:       RGB(15, 12, 22)   - Dark purple
    • Outline:    RGB(35, 25, 50)   - Purple outline
    
    Como usar:
    1. Carregue a Library via loadstring
    2. Crie uma Window com Library:CreateWindow()
    3. Adicione Tabs, Sections, Toggles, Sliders, etc.
    
    version: "1.0.0"
--]]

-- ═══ DoglyTdc Loader ═══
local DoglyTdc = {}

-- Base URL para carregar os módulos
-- Altere para seu próprio servidor se necessário
local BaseURL = "https://doglytdc.site/DoglyTdc%20Script/"

-- Função para carregar módulo remoto
local function loadModule(name)
    local success, result = pcall(function()
        return loadstring(game:HttpGet(BaseURL .. name .. ".lua"))()
    end)
    if success then
        return result
    else
        warn("[DoglyTdc] Erro ao carregar módulo: " .. name .. " - " .. tostring(result))
        return nil
    end
end

-- ═══ Carregar Library Principal ═══
local Library = loadModule("Library")

if not Library then
    warn("[DoglyTdc] Falha ao carregar Library principal")
    return
end

-- ═══ Configurar tema roxo DoglyTdc ═══
Library.Scheme = Library.Scheme or {}
Library.Scheme.AccentColor = Color3.fromRGB(109, 40, 217)   -- Roxo DoglyTdc
Library.Scheme.BackgroundColor = Color3.fromRGB(8, 8, 12)    -- Dark base
Library.Scheme.MainColor = Color3.fromRGB(15, 12, 22)       -- Dark purple
Library.Scheme.OutlineColor = Color3.fromRGB(35, 25, 50)    -- Purple outline
Library.Scheme.FontColor = Color3.new(1, 1, 1)              -- Branco

-- ═══ Criar Window de exemplo ═══
local Window = Library:CreateWindow({
    Title = "DoglyTdc Hub",
    Center = true,
    AutoShow = true,
    TabPadding = 8,
    MenuFadeTime = 0.2,
})

-- ═══ Tab Principal ═══
local MainTab = Window:AddTab("Principal")
local MainSection = MainTab:AddLeftGroupbox("Bem-vindo")

MainSection:AddLabel("DoglyTdc Roblox Loader v1.0")
MainSection:AddLabel("doglytdc.site")
MainSection:AddDivider()

-- Toggle de exemplo
MainSection:AddToggle("ExampleToggle", {
    Text = "Ativar Função",
    Default = false,
    Tooltip = "Ativa/desativa a função principal",
    Callback = function(Value)
        print("[DoglyTdc] Toggle:", Value)
    end,
})

-- Slider de exemplo
MainSection:AddSlider("ExampleSlider", {
    Text = "Velocidade",
    Default = 16,
    Min = 1,
    Max = 100,
    Rounding = 0,
    Callback = function(Value)
        print("[DoglyTdc] Slider:", Value)
    end,
})

-- ═══ Tab de Configurações ═══
local ConfigTab = Window:AddTab("Config")
local ConfigSection = ConfigTab:AddLeftGroupbox("Tema")

ConfigSection:AddLabel("Tema: DoglyTdc Purple")
ConfigSection:AddLabel("Accent: #6d28d9")

-- ═══ Carregar SaveManager (opcional) ═══
local SaveManager = loadModule("SaveManagerV3")
if SaveManager then
    SaveManager:SetLibrary(Library)
    SaveManager:SetFolder("DoglyTdcSettings")
    SaveManager:BuildConfigSection(ConfigTab)
    print("[DoglyTdc] SaveManager carregado com sucesso")
end

-- ═══ Exportar ═══
DoglyTdc.Library = Library
DoglyTdc.Window = Window
DoglyTdc.SaveManager = SaveManager

print("[DoglyTdc] Loader carregado com sucesso!")
print("[DoglyTdc] Visite: https://doglytdc.site")

return DoglyTdc
