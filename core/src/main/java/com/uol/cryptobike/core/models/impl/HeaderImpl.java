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

package com.uol.cryptobike.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.uol.cryptobike.core.models.Header;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Header.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/header")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeaderImpl
    implements Header
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstbuttonmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstlinkmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondbuttonmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondlinkmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdbuttonmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdlinkmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fourthbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fourthlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fourthbuttonmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fourthlinkmobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String urlLanguagePTbr;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String urlLanguageEnUs;
    @SlingObject
    private Resource resource;

    @Override
    public String getFirstbuttonlabel() {
        return firstbuttonlabel;
    }

    @Override
    public String getFirstlinklabel() {
        return firstlinklabel;
    }

    @Override
    public String getFirstbuttonmobile() {
        return firstbuttonmobile;
    }

    @Override
    public String getFirstlinkmobile() {
        return firstlinkmobile;
    }

    @Override
    public String getSecondbuttonlabel() {
        return secondbuttonlabel;
    }

    @Override
    public String getSecondlinklabel() {
        return secondlinklabel;
    }

    @Override
    public String getSecondbuttonmobile() {
        return secondbuttonmobile;
    }

    @Override
    public String getSecondlinkmobile() {
        return secondlinkmobile;
    }

    @Override
    public String getThirdbuttonlabel() {
        return thirdbuttonlabel;
    }

    @Override
    public String getThirdlinklabel() {
        return thirdlinklabel;
    }

    @Override
    public String getThirdbuttonmobile() {
        return thirdbuttonmobile;
    }

    @Override
    public String getThirdlinkmobile() {
        return thirdlinkmobile;
    }

    @Override
    public String getFourthbuttonlabel() {
        return fourthbuttonlabel;
    }

    @Override
    public String getFourthlinklabel() {
        return fourthlinklabel;
    }

    @Override
    public String getFourthbuttonmobile() {
        return fourthbuttonmobile;
    }

    @Override
    public String getFourthlinkmobile() {
        return fourthlinkmobile;
    }

    @Override
    public String getUrlLanguagePTbr() {
        return urlLanguagePTbr;
    }

    @Override
    public String getUrlLanguageEnUs() {
        return urlLanguageEnUs;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
