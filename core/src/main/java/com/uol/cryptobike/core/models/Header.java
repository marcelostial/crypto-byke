/*

 * ***********************************************************************

 * Compass UOL CONFIDENTIAL

 * ___________________

 *

 * Copyright 2022 Compass UOL.

 * All Rights Reserved.

 *

 * NOTICE:  All information contained herein is, and remains the property

 * of Compass UOL and its suppliers, if any. The intellectual and

 * technical concepts contained herein are proprietary to Compass UOL

 * and its suppliers and are protected by trade secret or copyright law.

 * Dissemination of this information or reproduction of this material

 * is strictly forbidden unless prior written permission is obtained

 * from Compass UOL.

 * ***********************************************************************

 */


package com.uol.cryptobike.core.models;

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.wcm.core.components.models.LanguageNavigation;
import com.adobe.cq.wcm.core.components.models.NavigationItem;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;
import org.osgi.annotation.versioning.ProviderType;


/**
 * Defines the {@code Header} Sling Model used for the {@code cryptobike/components/header} component.
 * 
 */
@ProviderType
public interface Header
    extends LanguageNavigation
{

    String getHome();

    @JsonProperty("currentLanguage")
    String getLanguage();

    List<NavItem> getNav();

    @JsonProperty("languages")
    List<Language> getLanguages();

    
    // diferent language pages
    @JsonProperty("languagePages")
    List<NavigationItem> getItems();
}
